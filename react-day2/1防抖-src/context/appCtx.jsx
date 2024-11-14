import { createContext } from'react';

const AppCtx = createContext();

export const Provider = AppCtx.Provider;   // 在父组件内使用
export const Consumer = AppCtx.Consumer;   // 在子组件内使用



export default AppCtx;