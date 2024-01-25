import { PrettyChatWindow } from 'react-chat-engine-pretty'

const ChatsPage = (props) => {
  // const chatProps = useMultiChatLogic(
  //   'efc1a900-21e8-4efa-b139-ac5c70a84478',
  //   props.user.username,
  //   props.user.secret);
  return (
    <div style={{ height: '100vh' }}>
      {/* <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%' }} /> */}
      <PrettyChatWindow
      projectId='efc1a900-21e8-4efa-b139-ac5c70a84478'
      username={props.user.username}
      secret={props.user.secret}
      style={{ height: '100%'}}
      />
    </div>
  )
}

export default ChatsPage