import { Helmet, HelmetData } from 'react-helmet-async';
import { SEOProps } from './type';
import { FC } from 'react';

const Seo: FC<SEOProps> = ({ title, description, name, type, image }) => {
  if (description.length > 60) {
    description = description.slice(0, 59);
  }
  const helmetData = new HelmetData({});
  return (
    <Helmet helmetData={helmetData}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* End standard metadata tags */}
      {/* Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      {/* End Facebook tags */}
      {/* Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      {/* End Twitter tags */}
      <link rel="icon" href={image} />
      <link rel="icon" type="image/png" sizes="32x32" href={image} />
    </Helmet>
  );
};

export default Seo;
