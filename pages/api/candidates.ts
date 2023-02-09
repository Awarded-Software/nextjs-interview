import type { NextApiRequest, NextApiResponse } from 'next'

interface Candidate {
  name: string;
  awardAmount: number | null;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Candidate[]>
) {
  res.status(200).json([
    { name: "Abigail Adams", awardAmount: null },
    { name: "Brian Baker", awardAmount: 1000 },
    { name: "Charlie Cui", awardAmount: 500 },
    { name: "David de Souza", awardAmount: null },
    { name: "Edgar Esposito", awardAmount: 750 },
  ])
}
