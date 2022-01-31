import {GetServerSideProps, NextPage} from "next";
import {Organization} from "../types/types";
import styles from "../styles/Organization.module.css";

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
        return (
            <div className={styles.card}>
                <h1>
                    {organization?.name || organization.login}'s GitHub Stats
                </h1>
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
            <p>
                {JSON.stringify(props)}
            </p>
        </div>
    );
}

export default Organization;