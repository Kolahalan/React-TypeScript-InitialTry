import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
  isLoggedIn: boolean
  Component: React.ComponentType<ProfileProps>
}

export const Private = ({ isLoggedIn, Component }: PrivateProps) => { //Passing Components as Props
  if (isLoggedIn) {
    return <Component name='Kolahalan' />
  } else {
    return <Login />
  }
}
