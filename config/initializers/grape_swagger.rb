# TODO Why doesn't this autoload?
require "api"
require "api/v1"
require "api/v1/application_serializer"

GrapeSwagger.model_parsers.register(GrapeSwagger::Jsonapi::Parser, Api::V1::ApplicationSerializer)
