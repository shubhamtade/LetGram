import { Modal, useMantineTheme } from "@mantine/core"; //popup website sortcut https://v4.mantine.dev/core/modal/

function ProfileEditModal({ modalOpened, setModalOpened }) {
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
      <form action="" className="infoForm">
        <h3>Your Info</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            name="firstname"
            placeholder="First Name"
          />
          <input
            type="text"
            className="infoInput"
            name="lastname"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="worksat"
            placeholder="Works at"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="livesin"
            placeholder="Lives in"
          />
          <input
            type="text"
            className="infoInput"
            name="country"
            placeholder="Country"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            name="relationshipstatus"
            placeholder="Relationship Status"
          />
        </div>
        <div>
            Profile Image
            <input type="file" name="profileImg"/>
            Cover Image
            <input type="file" name="coverImg"/>

        </div>
        <button className="button infoBtn" type="submit">
          Update
        </button>
      </form>
    </Modal>
  );
}

export default ProfileEditModal;
