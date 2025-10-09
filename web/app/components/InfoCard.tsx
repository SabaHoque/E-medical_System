type Card = {
  title: string;
  value: number;
};

type Props = {
  cards: Card[];
};

export default function InfoCards({ cards }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {cards.map((card, index) => (
        <div
          key={index}
          className="bg-white p-4 shadow rounded-lg hover:shadow-md transition"
        >
          <h3 className="text-gray-600">{card.title}</h3>
          <p className="text-2xl font-bold">{card.value}</p>
        </div>
      ))}
    </div>
  );
}


