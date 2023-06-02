export type CobranzaStatus = 'Completado' | 'Parcial' | 'Desfase' | 'Pendiente'

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

export type UserType = 'Seguridad' | 'Gerente'
