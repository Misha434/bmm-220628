// import link artifacts
import Link from 'next/link';
// import image artifacts

// Thumbnail properties
type Props = {
    // Thumbnail title
    title: string;
    // Thumbnail image src
    src: string;
    // Thumbnail slug link
    slug?:string;
}

const Thumbnail: React.FC<Props> = ({ title, src, slug}: Props) => {
  // Add the Thumbnail cover image
    const image = (
        // eslint-disable-next-line @next/next/no-img-element
        <img
        height={'auto'}
        width={'100%'}
        src={src}
        alt={`Thumbnail cover image ${title}`}
        />
    );

    // return the Thumbnail cover image slug
    return (
        <>
            {slug ? (
                <Link href={`/posts/${slug}`}>
                <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </>
    )
}

// export Thumbnail module
export default Thumbnail;