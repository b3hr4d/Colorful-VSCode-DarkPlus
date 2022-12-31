// @ts-nocheck
import {
  Box,
  Card,
  CircularProgress,
  Container,
  Divider,
  Modal,
  Stack,
} from "@mui/material"
import { initializeConnectors, useWeb3Keys } from "context/hooks/useWeb3"
import { RootState } from "context/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import WalletCard from "./WalletCard"

interface WalletModalProps {
  open: boolean
  onClose: (open: boolean) => void
}

const WalletModal: React.FC<WalletModalProps> = ({ open, onClose }) => {
  useEffect(() => initializeConnectors(), [])

  const web3Loading = useSelector(
    (rootState: RootState) => rootState.loading.models.web3
  )

  const connectorKeys = useWeb3Keys()

  return (
    <Modal open={open} onClose={() => onClose(false)} disableEnforceFocus>
      <Container maxWidth="xs">
        <Box m="10% auto">
          <Card>
            <Box maxHeight="70vh" overflow="auto">
              {web3Loading ? (
                <Box
                  height={300}
                  overflow="auto"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <CircularProgress />
                </Box>
              ) : (
                <Stack
                  spacing={2}
                  justifyContent="space-between"
                  divider={<Divider flexItem />}
                >
                  {connectorKeys.map((connector) => (
                    <WalletCard key={connector} name={connector} />
                  ))}
                </Stack>
              )}
            </Box>
          </Card>
        </Box>
      </Container>
    </Modal>
  )
}

export default WalletModal
