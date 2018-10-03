using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.SignalR;
using SignalR.ValuesClient;

namespace SignalR.Hub
{
    public class ValuesHub : Hub<IValuesClient>
    {
        public async Task Add(string value) => await Clients.All.Add(value);
        public async Task Delete(string value) => await Clients.All.Delete(value);

    }
}
