using System;
using System.Collections.Generic;

namespace phoneserver.Models
{
    public partial class Orders
    {
        public Orders()
        {
            OrderItems = new HashSet<OrderItems>();
        }

        public int OrderId { get; set; }
        public int CustomerId { get; set; }
        public string RequiedDay { get; set; }
        public DateTime? ShippedDay { get; set; }
        public int StoreId { get; set; }
        public int StaffId { get; set; }
        public bool Deleted { get; set; }
        public string Status { get; set; }
        public string Remark { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedDateTime { get; set; }
        public string LastUpdatedBy { get; set; }
        public DateTime? LastUpdatedDateTime { get; set; }

        public virtual Customers Customer { get; set; }
        public virtual Staffs Staff { get; set; }
        public virtual ICollection<OrderItems> OrderItems { get; set; }
    }
}
