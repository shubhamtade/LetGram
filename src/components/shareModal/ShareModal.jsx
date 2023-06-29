import { Modal, useMantineTheme } from "@mantine/core"; //popup website sortcut https://v4.mantine.dev/core/modal/
import PostShare from "../postShare/PostShare";

function ShareModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <PostShare/>
    </Modal>
  );
}

export default ShareModal;
