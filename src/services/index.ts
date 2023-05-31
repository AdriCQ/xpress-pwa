import axios, { type AxiosRequestHeaders } from 'axios'

const $api = axios.create({
	baseURL: 'https://sfast-api.terio.xyz/xpress/v1/pwa',
})

$api.interceptors.request.use((req) => {
	/* Append content type header if its not present */
	if (!(req.headers as AxiosRequestHeaders)["Content-Type"]) {
		(req.headers as AxiosRequestHeaders)["Content-Type"] = "*/*";
	}
	return req;
});

function useService() {
	return {
		$api,
		getAgencies: (gerencia: string) => $api.get<string[]>(`/agencias/${gerencia}`),
		getCobranza: (params: GetCobranzaProps) =>
			$api.get<{ cobranza: Cobranza[] }>(`/cobranza/${params.agent}/${params.year}/${params.week}`)
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
	agent: string
	week: number
}

export type CobranzaStatus = ''

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
