class TokensManager {
  static setTokens = (tokens: Tokens) => {
    const tokensString = JSON.stringify(tokens);
    localStorage.setItem('tokens', tokensString);
  };
  static getTokens = (): Tokens | null => {
    const tokensString = localStorage.getItem('tokens');
    if (!tokensString) {
      return null;
    }
    return JSON.parse(tokensString);
  };
  static clearTokens = () => {
    localStorage.removeItem('tokens');
  };
}
export default TokensManager;
