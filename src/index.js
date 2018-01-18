import ResourceAgent from './ResourceAgent';
const resourceAgents = {};

const connect = function(clientId = Symbol(), server) {
  let resourceAgent = resourceAgents[clientId];
  if (!resourceAgent) {
    resourceAgent = new ResourceAgent(server.resourceConfigs, server.dispatch.bind(server));
    resourceAgents[clientId] = resourceAgent;
  }
  return resourceAgent;
};

export default connect;
