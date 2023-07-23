import { Axios } from 'axios';

class RelayerClient {
  constructor(host) {
    this.host = host;
    this.axios = new Axios({
      baseURL: host,
    });
  }

  getVariable(variable, addr) {
    return this.axios.get(`/variable/${variable}`);
  }

  getVonftTokens(variable, addr) {
    return this.axios.get(`/token/vonft/${variable}`);
  }

  getActTokens(variable) {
    return this.axios.get(`/token/act/${variable}`);
  }

  getVonftAmount(variable) {
    return this.axios.get(`/vonft/amount/${variable}`);
  }

  getVariables(page, pageSize, isDescend) {
    return this.axios.get(`/vonft/amount/${variable}`);
  }

  getVotsByAddressForVariables(variable, addr) {
    return this.axios.get(`/vonft/varaddr/${variable}`);
  }

  getActsByAddressForVariables(variable, addr) {
    return this.axios.get(`/act/varaddr/${variable}`);
  }

  getVotsByAddress(addr) {
    return this.axios.get(`/vonft/address/${variable}`);
  }

  getActsByAddress(addr) {
    return this.axios.get(`/act/address/${variable}`);
  }
}

export default RelayerClient;
