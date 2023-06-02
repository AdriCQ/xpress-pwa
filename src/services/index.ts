import axios, { type AxiosRequestHeaders } from 'axios'
import type { Agency, AuthLogin, Cobranza, User } from '@/types'

const $api = axios.create({
  baseURL: 'https://sfast-api.terio.xyz/xpress/v1/pwa'
})

$api.interceptors.request.use((req) => {
  /* Append content type header if its not present */
  if (!(req.headers as AxiosRequestHeaders)['Content-Type']) {
    ;(req.headers as AxiosRequestHeaders)['Content-Type'] = 'application/json'
  }
  return req
})

function useService() {
  return {
    $api,
    getAgencies: (gerencia: string) => $api.get<string[]>(`/agencias/${gerencia}`),
    getAgency: (params: GetCobranzaProps) =>
      $api.get<Agency>(`/dashboard-agencia/${params.agency}/${params.year}/${params.week}`, {
        baseURL: 'https://sfast-api.terio.xyz/xpress/v1/'
      }),
    getCobranza: (params: GetCobranzaProps) =>
      $api.get<{ cobranza: Cobranza[] }>(
        `/cobranza/${params.agency}/${params.year}/${params.week}`
      ),
    getCurrentDate: () =>
      $api.get<{
        semana: number
        anio: number
        desde: string
        hasta: string
      }>('/semana_actual'),
    getGerencies: (user: string) => $api.get<string[]>(`/gerencias/${user}`),
    authLogin: (params: AuthLogin) => $api.post<User>('/login', params)
  }
}

export default useService

/**
 * -----------------------------------------
 *	Types
 * -----------------------------------------
 */

interface GetCobranzaProps {
  year: number
  agency: string
  week: number
}
