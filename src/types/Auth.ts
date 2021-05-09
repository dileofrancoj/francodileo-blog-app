export interface iAuth {
  name: string | null;
  jwt: string | null;
  authenticated?: boolean;
}

export const defaultState: iAuth = {
  name: null,
  jwt: null,
  authenticated: false,
};
