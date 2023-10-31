import axios from "axios";

const supabaseKey = process.env.SUPABASE_KEY

export const api = axios.create({
    baseURL: 'https://xxhacphpvetzbcxxrfnh.supabase.co/rest/v1',
    headers: {
        apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4aGFjcGhwdmV0emJjeHhyZm5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3NzQzNDUsImV4cCI6MjAxNDM1MDM0NX0.-vAkMOzo7JcYskLcnnAOVfB_P79QukYeWpsBttLTDb8',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh4aGFjcGhwdmV0emJjeHhyZm5oIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg3NzQzNDUsImV4cCI6MjAxNDM1MDM0NX0.-vAkMOzo7JcYskLcnnAOVfB_P79QukYeWpsBttLTDb8',
    }
})