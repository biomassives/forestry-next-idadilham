import Head from 'next/head';

export default function index({ data }) {
    return (
        <Head>
            <meta charset="UTF-8"></meta>
            <title>{data.title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={data.description}></meta>
            <meta name="google-site-verification" content="QtPLOMbLk5ajIwIdcq0yrxGvpF5Djm9hrsVk7kMl-6g" />

            <meta property="og:title" content={data.title} key="ogtitle" />
            <meta property="og:description" content={data.description} key="ogdesc" />
            <meta property="og:image" content="assets/img/fotoVector.jpg" key="ogimage" />
        </Head>
    )
}