import { apiProvider } from '../provider/index';

class ApiCore {
  constructor(options) {
    if (options.getAll) {
      return apiProvider.getAll(options.resource);
    }

    if (options.getSingle) {
      return apiProvider.getSingle(options.resource);
    }
  }
}
export default ApiCore;
