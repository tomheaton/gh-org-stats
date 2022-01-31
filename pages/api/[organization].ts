import {NextApiHandler, NextApiRequest, NextApiResponse} from 'next';
import {Organization} from "../../types/types";

type Data = {
    message: string
    organization?: Organization
}

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const { organization } = req.query as { organization: string };

    // console.log("org: " + organization);

    const response = await fetch(`https://api.github.com/users/${organization}`);
    const data = await response.json();

    if (data.message || data.type !== "Organization") {
        console.log("No data or not an organization.")
        return res.status(404).json({ message: 'Unsuccessful: No data or not an organization.' })
    }

    return res.status(200).json({ message: 'Success', organization: data })
}

export default handler;