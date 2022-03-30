import { Application } from "stimulus"
import { identifierForContextKey } from "stimulus/webpack-helpers"
import { controllerDefinitions as bulletTrainControllers } from "@bullet-train/bullet-train"
import { controllerDefinitions as bulletTrainFieldControllers } from "@bullet-train/fields"
import RevealController from 'stimulus-reveal'
import CableReady from 'cable_ready'
import consumer from '../channels/consumer'

const application = Application.start()

// Load all the controllers within this directory and all subdirectories.
// Controller files must be named *_controller.js.
import { context as controllersContext } from './**/*_controller.js';

application.load(bulletTrainControllers)
application.load(bulletTrainFieldControllers)

application.register('reveal', RevealController)

const controllers = Object.keys(controllersContext).map((filename) => ({
  identifier: identifierForContextKey(filename),
  controllerConstructor: context[filename] }))

application.load(controllers)

CableReady.initialize({ consumer })
