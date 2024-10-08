import type { ConfigurationsApiDto } from "#/modules/configurations/data/api/configurationsApiDto";
import { createStops } from "#/modules/configurations/domain/entities/stop";

export const mapStopsByAccountIdResponseToEntity = (
  response: ConfigurationsApiDto.StopsByAccountIdResponse,
) => {
  return response.data.map((stop) =>
    createStops({
      address: stop.stop_address,
      code: stop.stop_code,
      description: stop.description,
      id: stop.id,
      lat: stop.lat,
      lng: stop.lng,
      name: stop.stop_name,
      polygon: stop.polygon,
      radius: stop.radius,
      status: stop.status,
    }),
  );
};
