export type Token = {
    accessToken: string | null
    refreshToken: {
      value: string | null
      expiresIn: string | null
    } | null
  }
  
  export function saveToken (token: Token) {
    try {
      localStorage.setItem('@groovy:token', JSON.stringify(token))
      return {
        error: null
      }
    } catch {
      return {
        error: 'Could not save token'
      }
    }
  }
  
  export function getToken (): string | undefined {
    const data = localStorage.getItem('@groovy:token')
  
    if (data) {
      const token: Token = JSON.parse(data)
  
      return token.accessToken!
    }
  }
  
  export function removeToken () {
    localStorage.removeItem('@groovy:token')
  }