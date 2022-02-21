from core.models.integration import Integration

from .base import CrudResource, ListResource

class IntegrationResource(CrudResource):
    @property
    def resource(self):
        return Integration

    @property
    def key(self):
        return "integration"

class IntegrationListResource(ListResource):
    @property
    def resource(self):
        return Integration

    @property
    def key(self):
        return "integrations"