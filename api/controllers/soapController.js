const soaps = [
  {
    id: 's1',
    name: 'Luxury Soap',
    category: 'Personal Care',
    condition: 'New',
    description: 'A luxurious soap for daily use, enriched with natural oils and fragrances.'
  },
  {
    id: 's2',
    name: 'Degreasing Soap',
    category: 'Industrial Cleaning',
    condition: 'Used',
    description: 'Degreasing formula for heavy-duty cleaning.'
  },
  {
    id: 's3',
    name: 'Antibacterial Soap',
    category: 'Healthcare',
    condition: 'New',
    description: 'Kills 99.9% of germs and bacteria.'
  }
];

const getAllSoaps = (req, res) => {
  const safeSoaps = soaps.map(({ id, name, category, condition }) => ({
    id,
    name,
    category,
    condition
  }));

  res.status(200).json({ count: safeSoaps.length, data: safeSoaps });
};

const getSoapById = (req, res) => {
  const { id } = req.params;

  if (!/^[a-zA-Z0-9-]+$/.test(id)) {
    return res.status(400).json({ error: 'Invalid soap ID format' });
  }

  const soap = soaps.find((item) => item.id === id);

  if (!soap) {
    return res.status(404).json({ error: 'Soap not found' });
  }

  res.status(200).json({ data: soap });
};

const createSoap = (req, res) => {
  const { name, category, condition, description } = req.body;

  const newSoap = {
    id: `s${soaps.length + 1}`,
    name,
    category,
    condition,
    description
  };

  soaps.push(newSoap);

  res.status(201).json({ message: 'Soap created', data: newSoap });
};

module.exports = { getAllSoaps, getSoapById, createSoap };