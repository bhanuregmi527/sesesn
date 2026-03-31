import { ImageResponse } from 'next/og';

export const size = {
  width: 180,
  height: 180,
};

export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1B4332',
          borderRadius: 48,
        }}
      >
        <svg
          width="150"
          height="150"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 20a7 7 0 0 1-2.2-13.7C15.3 3.6 22 5 22 5s-1.4 6.7-4.3 13.2A7 7 0 0 1 11 20Z"
            stroke="white"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path d="M2 22s4-3 9-3" stroke="white" strokeWidth="2" strokeLinecap="round" />
          <path
            d="M15 6c-2 2-6 3.5-7 7"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    },
  );
}
