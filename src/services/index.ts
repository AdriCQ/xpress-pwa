import axios, { type AxiosRequestHeaders } from 'axios'

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

export type CobranzaStatus = 'Completado' | 'Parcial' | 'Pendiente'

export interface Cobranza {
  nombre: string
  prestamoId: number
  tarifa: number
  cobradoEnLaSemana: number
  status: CobranzaStatus
  fechaUltimoPago: string
  totalAPagar: number
  pagado: number
  restante: number
  porcentaje: number
}

export interface Agency {
  gerencia: string
  agencia: string
  anio: number
  semana: number
  clientes: number
  clientesCobrados: number
  noPagos: number
  numeroLiquidaciones: number
  pagosReducidos: number
  debitoMiercoles: number
  debitoJueves: number
  debitoViernes: number
  debitoTotal: number
  rendimiento: number
  totalDeDescuento: number
  totalCobranzaPura: number
  montoExcedente: number
  multas?: number
  liquidaciones: number
  cobranzaTotal: number
  montoDeDebitoFaltante: number
  efectivoEnCampo: number
}

export interface AuthLogin {
  username: string
  password: string
}

export interface User {
  usuarioId: 78
  nombre: string
  tipo: UserType
  pin: string | number
  usuario: string
  puedeVerificarAsignaciones: boolean
  puedeCobrar: boolean
  status: boolean
  gerencia?: string
  agencia?: string
  fechaIngreso: string
  telegramId?: string
  numeroCelular: string
  createdAt: string
  updatedAt: string
}

export type UserType = 'Seguridad'
