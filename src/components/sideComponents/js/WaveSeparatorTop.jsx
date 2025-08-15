export default function WaveSeparatorTop({ color, color2 }) {
  if (!color2){
    return (
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50px'
        }}
      >
        <path
          d="M0,50 C360,150 1080,-50 1440,50 L1440,100 L0,100 Z"
          fill={color}
        />
      </svg>
    )
  }
  return (
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100px'
      }}
    >
      <defs>
        <linearGradient id="waveGradientTop" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor={color2} stopOpacity="1" />
        </linearGradient>
      </defs>

      <path
        d="M0,50 C360,150 1080,-50 1440,50 L1440,100 L0,100 Z"
        fill="url(#waveGradientTop)"
      />
    </svg>
  )
}