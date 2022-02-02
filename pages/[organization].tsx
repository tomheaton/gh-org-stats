import {GetServerSideProps, NextPage} from "next";
import {Organization} from "../types/types";
import styles from "../styles/Organization.module.css";
import Image from "next/image";
import { FaStar } from 'react-icons/fa';

type Props = {
    message: string
    organization?: Organization
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const response = await fetch(`http://localhost:3000/api/${params?.organization}`);
    const data = await response.json()

    return {
        props: {
            message: data.message,
            organization: data.organization
        }
    };
}

const Organization: NextPage<Props> = (props) => {

    const { message, organization } = props;

    if (organization) {

        let repos = organization.public_repos;
        let total_star_count = 0 ;

        return (
            <div className={styles.card}>
                <h1>
                    {organization?.name || organization.login}'s GitHub Stats
                </h1>
                <p>
                    <span>
                        <FaStar size={30}/>
                    </span>
                    Total Stars Earned: {total_star_count}
                </p>
                <Image src={organization.avatar_url} height={64} width={64} alt={`${organization.login}'s Avatar`} />
                <br />
                <code>
                    {JSON.stringify(organization, null, 4)}
                </code>
            </div>
        );
    }

    return (
        <div className={styles.card}>
            <h1>
                No Data Found!
            </h1>
            <p>
                {message}
            </p>
        </div>
    );
}

export default Organization;
