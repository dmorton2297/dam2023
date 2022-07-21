export const OurStory: React.FC = () => {
  const content = `
    We met back in our 7th grade spanish class. 
    Through school and the beginning of our careers we have always been each others partner in crime. We always enjoy the best parts of life together, whether connecting with family at a cookout, conquering fears out on the ski slopes, working on our vitamin D levels tanning on the boat, or exploring new restraunts on our moped pearl.
    `;

  const split = content.split("\n");
  return (
    <div id="our-story" className="flex justify-end" style={{ flexDirection: 'column' }}>
      <div className='blob' style={{ borderRadius: 30 }}>
        <p className="text-5xl font-serif">Our story</p>
        {split.map((chunk) => (
          <>
            <p className="text-lg">{chunk}</p>
            <br />
          </>
        ))}
        <p className="text-lg">
          <strong>
            We are thrilled to be married next year, on May 6th 2023.
          </strong>
        </p>
      </div>
    </div>
  );
};
