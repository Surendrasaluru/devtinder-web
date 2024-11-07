const UserCard = (user) => {
  //console.log(user);
  const { firstName, lastName, about, photoUrl } = user.user;
  return (
    <div className="card card-side bg-base-100 w-[40%]  shadow-xl">
      <figure>
        <img src={photoUrl} alt="Movie" className="w-[250px] h-[250px]" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {firstName} {lastName}
        </h2>
        <p>{about}</p>

        <div className="card-actions justify-end my-3">
          <button className="btn btn-success">Interested</button>
          <button className="btn btn-error">Ignore</button>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
