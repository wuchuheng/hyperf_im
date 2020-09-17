import * as Icons from "@/components/Icons";


export type PropsState = {
  deviceIcon: keyof typeof Icons,
  province: string,
  city: string,
  name: string
  ip: string,
  OS: keyof typeof Icons,
  brower: keyof typeof Icons
}
