
import { useEffect, useState } from 'react';
import { getProperties } from '../services/propertyService';

export default function Properties() {
  const [properties, setProperties] = useState([]);


  useEffect(() => {
      const fetchProperties = async () => {
          const data = await getProperties();
          setProperties(data);
      };

      fetchProperties();
  }, []);

  return (
    <div>
      <h1>Properties</h1>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>{property.name} - {property.description}</li>
        ))}
      </ul>
    </div>
  );
}
