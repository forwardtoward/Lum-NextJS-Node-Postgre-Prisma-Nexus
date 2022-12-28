interface Props {
  color: string
}

export const VideoLogo = ({ color }: Props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill={color}>
      <path d="M368 288H31.1C14.33 288 0 302.3 0 319.1S14.33 352 31.1 352h32L64 464C64 490.5 85.49 512 112 512h256c26.51 0 48-21.49 48-48v-128C416 309.5 394.5 288 368 288zM352 0C303.4 0 261.8 27.38 240 67.25C218.3 27.38 176.6 0 128 0c-70.75 0-128 57.25-128 128S57.23 255.1 127.1 255.1L352 256c70.75 0 128-57.25 128-128S422.8 0 352 0zM128 192c-35.38 0-64-28.62-64-64s28.62-64 64-64s64 28.62 64 64S163.4 192 128 192zM352 192c-35.38 0-64-28.62-64-64s28.62-64 64-64s64 28.62 64 64S387.4 192 352 192zM524.8 262.5L448 320v128l76.76 57.54C545.9 521.4 576 506.3 576 479.9V288C576 261.7 545.9 246.6 524.8 262.5z" />
    </svg>
  )
}
