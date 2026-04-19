import { ImageResponse } from 'next/og';
import { headers } from 'next/headers';

export const size = {
  width: 32,
  height: 32,
};

export const contentType = 'image/png';

export const runtime = 'edge';

export default function Icon() {
  const headerList = headers();
  const host = headerList.get('x-forwarded-host') ?? headerList.get('host');
  const forwardedProto = headerList.get('x-forwarded-proto');
  const proto = forwardedProto ?? (host?.includes('localhost') || host?.startsWith('127.0.0.1') ? 'http' : 'https');
  const logoUrl = host ? `${proto}://${host}/sesesn-logo.jpeg` : 'https://sesesn.com/sesesn-logo.jpeg';

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFFFFF',
          borderRadius: '9999px',
          overflow: 'hidden',
        }}
      >
        <img
          src={logoUrl}
          alt="SESESN"
          width={32}
          height={32}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>
    ),
    {
      ...size,
    },
  );
}
