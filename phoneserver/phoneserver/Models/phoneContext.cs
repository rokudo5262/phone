using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace phoneserver.Models
{
    public partial class phoneContext : DbContext
    {
    public phoneContext(DbContextOptions<phoneContext> options)
        : base(options)
    {
    }
    public virtual DbSet<Brands> Brands { get; set; }
        public virtual DbSet<Categories> Categories { get; set; }
        public virtual DbSet<Customers> Customers { get; set; }
        public virtual DbSet<OrderItems> OrderItems { get; set; }
        public virtual DbSet<Orders> Orders { get; set; }
        public virtual DbSet<Products> Products { get; set; }
        public virtual DbSet<Staffs> Staffs { get; set; }
        public virtual DbSet<Stocks> Stocks { get; set; }
        public virtual DbSet<Stores> Stores { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Brands>(entity =>
            {
                entity.HasKey(e => e.BrandId)
                    .HasName("PK__Brands__5E5A8E276F3BC837");

                entity.Property(e => e.BrandId).HasColumnName("brand_id");

                entity.Property(e => e.BrandName)
                    .HasColumnName("brand_name")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("createdBy")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedDateTime)
                    .HasColumnName("createdDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Deleted).HasColumnName("deleted");

                entity.Property(e => e.Remark)
                    .HasColumnName("remark")
                    .HasMaxLength(255);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(255);

                entity.Property(e => e.UpdatedDateTime)
                    .HasColumnName("updatedDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Updatedby)
                    .HasColumnName("updatedby")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<Categories>(entity =>
            {
                entity.HasKey(e => e.CategoryId)
                    .HasName("PK__Categori__D54EE9B4BBE9FBEB");

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.CategoryName)
                    .HasColumnName("category_name")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("createdBy")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedDateTime)
                    .HasColumnName("createdDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Deleted)
                    .HasColumnName("deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.UpdatedDateTime)
                    .HasColumnName("updatedDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Updatedby)
                    .HasColumnName("updatedby")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<Customers>(entity =>
            {
                entity.HasKey(e => e.CustomerId)
                    .HasName("PK__Customer__CD65CB85CFC6441F");

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.Address)
                    .HasColumnName("address")
                    .HasMaxLength(255);

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasMaxLength(255);

                entity.Property(e => e.Country)
                    .HasColumnName("country")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("createdBy")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedDateTime)
                    .HasColumnName("createdDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.DateOfBirth)
                    .HasColumnName("dateOfBirth")
                    .HasColumnType("datetime");

                entity.Property(e => e.Deleted)
                    .HasColumnName("deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.District)
                    .HasColumnName("district")
                    .HasMaxLength(255);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(255);

                entity.Property(e => e.Firstname)
                    .HasColumnName("firstname")
                    .HasMaxLength(255);

                entity.Property(e => e.Gender)
                    .HasColumnName("gender")
                    .HasMaxLength(255);

                entity.Property(e => e.IdentityCard)
                    .HasColumnName("identityCard")
                    .HasMaxLength(255);

                entity.Property(e => e.IdentityCardAddress)
                    .HasColumnName("identityCardAddress")
                    .HasMaxLength(255);

                entity.Property(e => e.IdentityCardDate)
                    .HasColumnName("identityCardDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.IdentityCardPlace)
                    .HasColumnName("identityCardPlace")
                    .HasMaxLength(255);

                entity.Property(e => e.Lastname)
                    .HasColumnName("lastname")
                    .HasMaxLength(255);

                entity.Property(e => e.Middlename)
                    .HasColumnName("middlename")
                    .HasMaxLength(255);

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasMaxLength(255);

                entity.Property(e => e.Phone)
                    .HasColumnName("phone")
                    .HasMaxLength(255);

                entity.Property(e => e.Remark)
                    .HasColumnName("remark")
                    .HasMaxLength(255);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(255);

                entity.Property(e => e.Street)
                    .HasColumnName("street")
                    .HasMaxLength(255);

                entity.Property(e => e.UpdatedDateTime)
                    .HasColumnName("updatedDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Updatedby)
                    .HasColumnName("updatedby")
                    .HasMaxLength(255);

                entity.Property(e => e.Ward)
                    .HasColumnName("ward")
                    .HasMaxLength(255);

                entity.Property(e => e.ZipCode)
                    .HasColumnName("zip_code")
                    .HasMaxLength(255);
            });

            modelBuilder.Entity<OrderItems>(entity =>
            {
                entity.HasKey(e => e.ItemId)
                    .HasName("PK__OrderIte__52020FDDD4A4057E");

                entity.Property(e => e.ItemId).HasColumnName("item_id");

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("createdBy")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedDateTime)
                    .HasColumnName("createdDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Deleted)
                    .HasColumnName("deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Discount).HasColumnName("discount");

                entity.Property(e => e.ListPrice).HasColumnName("list_price");

                entity.Property(e => e.OrderId).HasColumnName("order_id");

                entity.Property(e => e.ProductId).HasColumnName("product_id");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.Remark)
                    .HasColumnName("remark")
                    .HasMaxLength(255);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(255);

                entity.Property(e => e.UpdatedDateTime)
                    .HasColumnName("updatedDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Updatedby)
                    .HasColumnName("updatedby")
                    .HasMaxLength(255);

                entity.HasOne(d => d.Order)
                    .WithMany(p => p.OrderItems)
                    .HasForeignKey(d => d.OrderId)
                    .HasConstraintName("FK_OrderItems_Orders");

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.OrderItems)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK_OrderItems_Products");
            });

            modelBuilder.Entity<Orders>(entity =>
            {
                entity.HasKey(e => e.OrderId)
                    .HasName("PK__Orders__4659622922347D50");

                entity.Property(e => e.OrderId).HasColumnName("order_id");

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("createdBy")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedDateTime)
                    .HasColumnName("createdDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.CustomerId).HasColumnName("customer_id");

                entity.Property(e => e.Deleted)
                    .HasColumnName("deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Remark)
                    .HasColumnName("remark")
                    .HasMaxLength(255);

                entity.Property(e => e.RequiedDay)
                    .HasColumnName("requied_day")
                    .HasMaxLength(255);

                entity.Property(e => e.ShippedDay)
                    .HasColumnName("shipped_day")
                    .HasColumnType("datetime");

                entity.Property(e => e.StaffId).HasColumnName("staff_id");

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(255);

                entity.Property(e => e.StoreId).HasColumnName("store_id");

                entity.Property(e => e.UpdatedDateTime)
                    .HasColumnName("updatedDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Updatedby)
                    .HasColumnName("updatedby")
                    .HasMaxLength(255);

                entity.HasOne(d => d.Customer)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.CustomerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Orders_Customers");

                entity.HasOne(d => d.Staff)
                    .WithMany(p => p.Orders)
                    .HasForeignKey(d => d.StaffId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Orders_Staffs");
            });

            modelBuilder.Entity<Products>(entity =>
            {
                entity.HasKey(e => e.ProductId)
                    .HasName("PK__Products__47027DF5F30FDE25");

                entity.Property(e => e.ProductId).HasColumnName("product_id");

                entity.Property(e => e.BrandId).HasColumnName("brand_id");

                entity.Property(e => e.CategoryId).HasColumnName("category_id");

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("createdBy")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedDateTime)
                    .HasColumnName("createdDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Deleted)
                    .HasColumnName("deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.Description)
                    .HasColumnName("description")
                    .HasMaxLength(255);

                entity.Property(e => e.LastUpdatedBy)
                    .HasColumnName("lastUpdatedBy")
                    .HasMaxLength(255);

                entity.Property(e => e.LastUpdatedDateTime)
                    .HasColumnName("lastUpdatedDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.ModelYear)
                    .HasColumnName("model_year")
                    .HasMaxLength(255);

                entity.Property(e => e.Price)
                    .HasColumnName("price")
                    .HasMaxLength(255);

                entity.Property(e => e.ProductName)
                    .HasColumnName("product_name")
                    .HasMaxLength(255);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(255);

                entity.HasOne(d => d.Brand)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.BrandId)
                    .HasConstraintName("FK_Products_Brands1");

                entity.HasOne(d => d.Category)
                    .WithMany(p => p.Products)
                    .HasForeignKey(d => d.CategoryId)
                    .HasConstraintName("FK_Products_Categories");
            });

            modelBuilder.Entity<Staffs>(entity =>
            {
                entity.HasKey(e => e.StaffId)
                    .HasName("PK__Staffs__1963DD9CD962EC97");

                entity.Property(e => e.StaffId).HasColumnName("staff_id");

                entity.Property(e => e.Address)
                    .HasColumnName("address")
                    .HasMaxLength(255);

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasMaxLength(255);

                entity.Property(e => e.Country)
                    .HasColumnName("country")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("createdBy")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedDateTime)
                    .HasColumnName("createdDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.DateOfBirth)
                    .HasColumnName("dateOfBirth")
                    .HasColumnType("datetime");

                entity.Property(e => e.Deleted).HasColumnName("deleted");

                entity.Property(e => e.District)
                    .HasColumnName("district")
                    .HasMaxLength(255);

                entity.Property(e => e.Email)
                    .HasColumnName("email")
                    .HasMaxLength(255);

                entity.Property(e => e.Firstname)
                    .HasColumnName("firstname")
                    .HasMaxLength(255);

                entity.Property(e => e.Gender)
                    .HasColumnName("gender")
                    .HasMaxLength(255);

                entity.Property(e => e.IdentityCard)
                    .HasColumnName("identityCard")
                    .HasMaxLength(255);

                entity.Property(e => e.IdentityCardAddress)
                    .HasColumnName("identityCardAddress")
                    .HasMaxLength(255);

                entity.Property(e => e.IdentityCardDate)
                    .HasColumnName("identityCardDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.IdentityCardPlace)
                    .HasColumnName("identityCardPlace")
                    .HasMaxLength(255);

                entity.Property(e => e.Lastname)
                    .HasColumnName("lastname")
                    .HasMaxLength(255);

                entity.Property(e => e.ManagerId).HasColumnName("manager_id");

                entity.Property(e => e.Middlename)
                    .HasColumnName("middlename")
                    .HasMaxLength(255);

                entity.Property(e => e.Password)
                    .HasColumnName("password")
                    .HasMaxLength(255);

                entity.Property(e => e.Phone)
                    .HasColumnName("phone")
                    .HasMaxLength(255);

                entity.Property(e => e.Remark)
                    .HasColumnName("remark")
                    .HasMaxLength(255);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(255);

                entity.Property(e => e.StoreId).HasColumnName("store_id");

                entity.Property(e => e.Street)
                    .HasColumnName("street")
                    .HasMaxLength(255);

                entity.Property(e => e.UpdatedDateTime)
                    .HasColumnName("updatedDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Updatedby)
                    .HasColumnName("updatedby")
                    .HasMaxLength(255);

                entity.Property(e => e.Ward)
                    .HasColumnName("ward")
                    .HasMaxLength(255);

                entity.Property(e => e.ZipCode)
                    .HasColumnName("zip_code")
                    .HasMaxLength(255);

                entity.HasOne(d => d.Manager)
                    .WithMany(p => p.InverseManager)
                    .HasForeignKey(d => d.ManagerId)
                    .HasConstraintName("FK_Staffs_Staffs");

                entity.HasOne(d => d.Store)
                    .WithMany(p => p.Staffs)
                    .HasForeignKey(d => d.StoreId)
                    .HasConstraintName("FK_Staffs_Stores");
            });

            modelBuilder.Entity<Stocks>(entity =>
            {
                entity.HasKey(e => e.StockId)
                    .HasName("PK__Stocks__E866686255E5CC7B");

                entity.Property(e => e.StockId).HasColumnName("stock_id");

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("createdBy")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedDateTime)
                    .HasColumnName("createdDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Deleted)
                    .HasColumnName("deleted")
                    .HasDefaultValueSql("((0))");

                entity.Property(e => e.ProductId).HasColumnName("product_id");

                entity.Property(e => e.Quantity).HasColumnName("quantity");

                entity.Property(e => e.Remark)
                    .HasColumnName("remark")
                    .HasMaxLength(255);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(255);

                entity.Property(e => e.StoreId).HasColumnName("store_id");

                entity.Property(e => e.UpdatedDateTime)
                    .HasColumnName("updatedDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Updatedby)
                    .HasColumnName("updatedby")
                    .HasMaxLength(255);

                entity.HasOne(d => d.Product)
                    .WithMany(p => p.Stocks)
                    .HasForeignKey(d => d.ProductId)
                    .HasConstraintName("FK_Stocks_Products");

                entity.HasOne(d => d.Store)
                    .WithMany(p => p.Stocks)
                    .HasForeignKey(d => d.StoreId)
                    .HasConstraintName("FK_Stocks_Stores");
            });

            modelBuilder.Entity<Stores>(entity =>
            {
                entity.HasKey(e => e.StoreId)
                    .HasName("PK__Stores__A2F2A30C10B40FD4");

                entity.Property(e => e.StoreId).HasColumnName("store_id");

                entity.Property(e => e.Address)
                    .HasColumnName("address")
                    .HasMaxLength(255);

                entity.Property(e => e.City)
                    .HasColumnName("city")
                    .HasMaxLength(255);

                entity.Property(e => e.Country)
                    .HasColumnName("country")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedBy)
                    .HasColumnName("createdBy")
                    .HasMaxLength(255);

                entity.Property(e => e.CreatedDateTime)
                    .HasColumnName("createdDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Deleted).HasColumnName("deleted");

                entity.Property(e => e.District)
                    .HasColumnName("district")
                    .HasMaxLength(255);

                entity.Property(e => e.Phone)
                    .HasColumnName("phone")
                    .HasMaxLength(255);

                entity.Property(e => e.Remark)
                    .HasColumnName("remark")
                    .HasMaxLength(255);

                entity.Property(e => e.Status)
                    .HasColumnName("status")
                    .HasMaxLength(255);

                entity.Property(e => e.StoreName)
                    .HasColumnName("store_name")
                    .HasMaxLength(255);

                entity.Property(e => e.Street)
                    .HasColumnName("street")
                    .HasMaxLength(255);

                entity.Property(e => e.UpdatedDateTime)
                    .HasColumnName("updatedDateTime")
                    .HasColumnType("datetime");

                entity.Property(e => e.Updatedby)
                    .HasColumnName("updatedby")
                    .HasMaxLength(255);

                entity.Property(e => e.Ward)
                    .HasColumnName("ward")
                    .HasMaxLength(255);

                entity.Property(e => e.ZipCode)
                    .HasColumnName("zip_code")
                    .HasMaxLength(255);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
