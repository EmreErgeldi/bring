import Image from "next/image";

export default function Category(props: any) {
  function Item(props: {
    data: {
      name: string;
      image: string;
    };
  }) {
    return (
      <div>
        <Image
          src={props.data.image}
          alt="categories"
          width={300}
          height={300}
        />
        {props.data.name}
      </div>
    );
  }
  return (
    <div>
      <Image src={props.data.image} alt="categories" width={300} height={300} />
      {props.data.name}
    </div>
  );
}
