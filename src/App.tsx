import { ThemeProvider } from "styled-components"
import { Transactions } from "./pages/Transactions"
import { GlobalStyle } from "./styles/global"
import { DefaultTheme } from "./styles/themes/default"
import { TransactionsProvider } from "./contexts/TransactionsContext"

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />

      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

