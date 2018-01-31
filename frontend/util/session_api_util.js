//create user
export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/users',
    data: {user}
  });
};

//login user
export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: 'api/session',
    //data: {user: user}
    //when testing this I could just say
    //login({username: 'dahveed15', email: 'dahveed15@gmail.com', password: 'password'}).then((result) => console.log(result));
    data: {user}
  });
};

//logout user
export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: 'api/session'
  });

};
