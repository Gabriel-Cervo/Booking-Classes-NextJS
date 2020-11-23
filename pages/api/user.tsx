import db from '../../lib/db';
import escape from 'sql-template-strings';

import { NextApiRequest, NextApiResponse } from 'next';

interface ResponseType {
  message: string;
}

export default async (
  req: NextApiRequest,
  res: NextApiResponse<ResponseType>
): Promise<void> => {
  res.status(200).json({ message: 'oi' });
};
