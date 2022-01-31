import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';
import {Organization} from "../../types/types";

type Data = {
    message: string
    organization?: Organization
}

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { organisation } = req.query as { organisation: string };

    console.log("org: " + organisation);

    const response = await fetch(`https://api.github.com/users/${organisation}`);
    const data = await response.json();

    if (data.message || data.type !== "Organization") {
        console.log("No data or not an organisation.")
        return res.status(200).json({ message: 'Unsuccessful: No data or not an organisation.' })
    }

    return res.status(200).json({ message: 'Success', organization: data })
}

export default handler;