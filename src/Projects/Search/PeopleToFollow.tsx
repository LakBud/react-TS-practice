import UserCard from "./UserCard";

const peopleToFollow = [
  { name: "Max", following: true },
  { name: "Jimmy", following: false },
  { name: "Timmy", following: true },
  { name: "Tim", following: false },
];

const PeopleToFollow = () => {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold text-lg mb-4">People to follow</h3>
      <div className="flex flex-col gap-3">
        {peopleToFollow.map((person, index) => (
          <UserCard key={index} person={person} />
        ))}
      </div>
    </div>
  );
};

export default PeopleToFollow;
