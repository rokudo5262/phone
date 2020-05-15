using System;
using System.Collections.Generic;

namespace phoneserver.Models
{
    public partial class Stores
    {
        public Stores()
        {
            Staffs = new HashSet<Staffs>();
            Stocks = new HashSet<Stocks>();
        }

        public int StoreId { get; set; }
        public string StoreName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public string Street { get; set; }
        public string Ward { get; set; }
        public string District { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public bool? Deleted { get; set; }
        public string Status { get; set; }
        public string Remark { get; set; }
        public string Updatedby { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? UpdatedDateTime { get; set; }
        public DateTime? CreatedDateTime { get; set; }

        public virtual ICollection<Staffs> Staffs { get; set; }
        public virtual ICollection<Stocks> Stocks { get; set; }
    }
}
