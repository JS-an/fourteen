export default ({ store, redirect}) => {
  if (store.state.user.role < 1) {
    return redirect('/')
  }
}
