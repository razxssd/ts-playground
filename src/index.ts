import {print} from './config';
import {IUser} from "./interface/index";

const hello_world = "Hello World!";

print("ciao")
console.log("ciao")

interface IAdmin{
  id: number;
  hasTeams: boolean
  address?: string
}

interface IGuest{
  id: number;
  hasLink: boolean
}

const user: IAdmin | IGuest = {
  id: 2,
  hasTeams: true
};

function seeInvoices (user: IAdmin | IGuest) {
  if ("hasTeams" in user) {
    // admin logic
    user.address
  } else {
    // guest logic

  }
}

// TypeGuard
const isAdmin = (user: IAdmin | IGuest): user is IAdmin => {
  return (user as IAdmin).hasTeams
};
