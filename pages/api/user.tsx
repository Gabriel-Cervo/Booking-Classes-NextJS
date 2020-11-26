import { NextApiRequest, NextApiResponse } from 'next';
import connect from '../../lib/database';

interface ErrorResponseType {
  error: string;
}

interface SucessResponseType {
  user: {
    _id: string;
    name: string;
    email: string;
    phoneNumber: string;
    age: string;
    isTeacher: boolean;
  };
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ErrorResponseType | SucessResponseType>
): Promise<void> => {
  if (req.method === 'POST') {
    const { name, email, phoneNumber, age, isTeacher } = req.body;

    if (!name || !email || !age || !phoneNumber) {
      res.status(400).json({ error: 'Missing values!' });
      return;
    }

    const { db } = await connect();
    const response = await db.collection('users').insertOne({
      name,
      email,
      phoneNumber,
      age,
      isTeacher,
    });

    res.status(200).json(response.ops[0]);
  }
};
