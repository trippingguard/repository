const Judgment = () => {
  const contents = [
    {
      id: 1,
      date: "October 4, 2024",
      parties: "MeTL -v- JocPo Ltd",
    },
    {
      id: 2,
      date: "October 8, 2024",
      parties: "Pamba Jiji -v- Tanzania Football Federation (TFF)",
    },
    {
      id: 3,
      date: "October 1, 2024",
      parties:
        "AzamFC -v- Jenada Batchelor Foundation for Children (JBFC) Funds and Welfare",
    },
    {
      id: 4,
      date: "October 2, 2024",
      parties: "MeTL -v- Fountain Gate Foundation",
    },
  ];

  return (
    <div>
      <h1>Latest Judgments</h1>
      <div>
        {contents.map((content) => (
          <div>{content}</div>
        ))}
      </div>
    </div>
  );
};

export default Judgment;
