
type Props = {
    name?: string;
}
const Greet = ({ name }: Props) => {
  return <div>hello {name}</div>;
};

export default Greet;
