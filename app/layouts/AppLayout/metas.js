import { Helmet } from "react-helmet";

/* globals APP */

const { ROOT_PATH, FULL_URL, title, description } = APP;

const metas = () => {
    return (
        <Helmet>
            <meta name="robots" content="noindex, nofollow" />
            <meta name="description" content={description} />
            <meta name="keywords" content="boilerplate, node, frontend, pug, stylus, webpack" />
            <meta property="fb:app_id" content="" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:site_name" content={title} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={FULL_URL} />
            <meta property="og:image" content={`${ROOT_PATH}images/logo.png`} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@project" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content="" />
        </Helmet>
    );
};

export default metas